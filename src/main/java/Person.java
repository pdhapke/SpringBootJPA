package main.java;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Person {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String lname;
    private String fname;
    private String address;
    private String city;
    private String state;
    private String zip;

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        if(address.equals("")){
            this.address = "Not Yet Set";
        }

        this.address = address;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        if(city.equals("")){
            this.city = "Unknown";
        }

        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        if(state.equals("") || state == null){
            this.state = "XX";
        }

        this.state = state;
    }

    public String getZip() {
        return zip;
    }

    public void setZip(String zip) {
        if(zip.equals("")){
            this.zip = "00000";
        }

        this.zip = zip;
    }



    public String getLname() {
        return lname;
    }

    public void setLname(String lname) {
        this.lname = lname;
    }

    public String getFname() {
        return fname;
    }

    public void setFname(String fname) {
        this.fname = fname;
    }
}
