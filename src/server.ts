import fastify from "fastify";
import { request } from "http";

const server = fastify({logger: true});

const teams = [
    {id: 1, name: "McLaren", base: "Woking, United Kingdom"},
    {id: 2, name: "Mercedes", base: "Brackley, United Kingdom"},
    {id: 3, name: "Ferrari", base: "Maranello, Italy"},
    {id: 4, name: "Red Bull Racing", base: "Milton Keynes, United Kingdom"},
    {id: 5, name: "Alpine", base: "Enstone, United Kingdom"},
    {id: 6, name: "Aston Martin", base: "Silverstone, United Kingdom"},
    {id: 7, name: "Alfa Romeo", base: "Hinwil, Switzerland"},
    {id: 8, name: "Haas", base: "Kannapolis, United States"},
    {id: 9, name: "AlphaTauri", base: "Faenza, Italy"},
    {id: 10, name: "Williams", base: "Grove, United Kingdom"}
];

const drivers = [
    {id: 1, name: "Max Verstappen", team: "Red Bull Racing"},
    {id: 2, name: "Lewis Hamilton", team: "Mercedes"},
    {id: 3, name: "Charles Leclerc", team: "Ferrari"},
    {id: 4, name: "Lando Norris", team: "McLaren"},
    {id: 5, name: "Sergio Pérez", team: "Red Bull Racing"},
    {id: 6, name: "Valtteri Bottas", team: "Alfa Romeo"},
    {id: 7, name: "Daniel Ricciardo", team: "AlphaTauri"},
    {id: 8, name: "Sebastian Vettel", team: "Aston Martin"},
    {id: 9, name: "Fernando Alonso", team: "Alpine"},
    {id: 10, name: "Kimi Räikkönen", team: "Alfa Romeo"},
    {id: 11, name: "Pierre Gasly", team: "Alpine"},
    {id: 12, name: "Esteban Ocon", team: "Alpine"},
    {id: 13, name: "Nicholas Latifi", team: "Williams"},
    {id: 14, name: "George Russell", team: "Mercedes"},
    {id: 15, name: "Mick Schumacher", team: "Haas"},
    {id: 16, name: "Nicholas Latifi", team: "Williams"}
];

server.get("/teams", async(request, response)=>{
    response.type("application/json").code(200)
    return {teams};
});

server.get("/drivers", async(request, response)=>{
    response.type("application/json").code(200)
    return {drivers};
});

interface DriverParams{
    id: string
}

server.get<{Params: DriverParams}>("/drivers/:id", async(request, response) => {
    const id = parseInt(request.params.id);
    const driver = drivers.find( d => d.id === id);

    if(!driver){
        response.type("application/json").code(404);
        return {message: "Driver not found"}
    }else{
        response.type("application/json").code(200);
        return {driver};
    }
});

server.listen({port: 3333}, () => {
    console.log("Server init");
});
