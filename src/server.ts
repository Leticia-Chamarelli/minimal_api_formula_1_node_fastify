import fastify from "fastify";

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


server.get("/teams", async(request, response)=>{
    response.type("application/json").code(200)
    return [];
});

server.get("/drivers", async(request, response)=>{
    response.type("application/json").code(200)
    return [{id: 1, name: "Max Verstappen", team: "Red Bull Racing"}];
});

server.listen({port: 3333}, () => {
    console.log("Server init");
});
