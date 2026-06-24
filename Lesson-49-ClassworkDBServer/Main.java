import com.sun.net.httpserver.HttpContext;
import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpServer;
import java.io.IOException;
import java.sql.*;

import java.net.InetSocketAddress;
import java.util.Map;

//For compiling on the shell on repl: Same on mac
//javac -cp sqlite-jdbc-3.23.1.jar: Main.java
//java -cp sqlite-jdbc-3.23.1.jar: Main

//Use for windows
//javac -cp sqlite-jdbc-3.23.1.jar; Main.java
class Main {

 public static void main(String[] args)throws IOException{
    (new Main()).init();
  }


  void print(Object o){ System.out.println(o);}
  void printt(Object o){ System.out.print(o);}

  void init() throws IOException{
   

    // create a port - our Gateway
    int port = 8300;
      
    //create the HTTPserver object
    HttpServer server = HttpServer.create(new InetSocketAddress(port),0);

    // create the database object
    Database db = new Database("jdbc:sqlite:chinook.db");
    Database db2 = new Database("jdbc:sqlite:CompanyTable.db");
    
   // Add your  code here
    
  // 1
    server.createContext("/", new RouteHandler("You are connected, but route not given or incorrect....") );

    String sql = "";
    
    // sql  = " Select * from customers ";
    // server.createContext("/customers", new RouteHandler(db,sql) ) ;

    // sql  = " Select * from employees ";
    // server.createContext("/employees", new RouteHandler(db,sql) ) ;

    // sql  = " Select * From tracks ";
    // sql += " Inner Join albums ON albums.albumid=tracks.albumid ";
    // sql += " Inner Join artists ON albums.artistid=artists.artistid ";
    // server.createContext("/genressongs", new RouteHandler(db,sql) );
    
    // sql  = " Select customers.firstname, customers.lastname, tracks.name, invoices.invoicedate From tracks ";
    // sql += " Inner Join invoice_items ON invoice_items.trackid=tracks.trackid ";
    // sql += " Inner Join invoices ON invoices.invoiceid=invoice_items.invoiceid ";
    // sql += " Inner Join customers ON invoices.customerid=customers.customerid ";
    // server.createContext("/customersongs", new RouteHandler(db,sql) );

    sql = "Select * From Products";
    server.createContext("/products",new RouteHandler(db2,sql));

    sql = "Select * From Customers";
    server.createContext("/customers",new RouteHandler(db2,sql));

    sql = "Select * From Employees";
    server.createContext("/employees",new RouteHandler(db2, sql));

    sql = "Select * From Orders Inner Join Customers On Orders.AccountNumber = Customers.AccountNumber";
    server.createContext("/orders",new RouteHandler(db2, sql));

    // Create a route called latinsongs that get all the song names, artist name and the album name that are considered "Latin" music.
    //Start the server


    server.start();


    System.out.println("Server is listening on port "+port);
       
      
    }    
}


