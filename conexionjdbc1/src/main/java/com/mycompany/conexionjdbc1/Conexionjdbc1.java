

package com.mycompany.conexionjdbc1;

import java.util.Scanner;
import java.sql.*;
import java.util.logging.Level;
import java.util.logging.Logger;

public class Conexionjdbc1 {
    static Scanner scanner=new Scanner(System.in);

    public static void main(String[] args) {
        String usuario="root";
        String password="";
        String url="jdbc:mysql://localhost:3306/prueba1";
        Connection myconexion;
        Statement mystatement;
        ResultSet myrs;
        
        
        
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");

        } catch (ClassNotFoundException ex) {
            Logger.getLogger(Conexionjdbc1.class.getName()).log(Level.SEVERE, null, ex);
        }
        
        
            mostrarOpciones();
            int seleccion=scanner.nextInt();
            switch (seleccion) {
                case 1 -> System.out.println("OPCION 1 - Listar Registros:");
                default -> throw new AssertionError();
            }        
  
    }
    
    static void mostrarOpciones(){
        System.out.println("Evidencia .GA7-220501096-AA2-EV01!");
        System.out.println("Opciones del conectro JDBC:");
        System.out.println("1- Listar Registros:");
        System.out.println("2- Agregar Registro:");
        System.out.println("3- Actualizar Datos:");
        System.out.println("4- Eliminar Registro:");
        System.out.println("5- Terminar:");
        System.out.println("Seleccione su opcion : . . . ");        
    }
            
    
    
}
