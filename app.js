const Controller = require("./controllers/controller");

const input = process.argv.slice(2)

switch (input[0]) {
    case "query-1":
        Controller.query1()
        break;

    case "query-2":
        Controller.query2()
        break;

    case "query-3":
        Controller.query3()
        break;

    case "query-4":
        Controller.query4()
        break;

    case "query-5":
        Controller.query5()
        break;

    default:
        console.log("Masukkan Perintah");
        break;
}