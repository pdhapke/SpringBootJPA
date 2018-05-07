
package main.java;



import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class serverView {

    @GetMapping("/greeting")
    public String greeting(@RequestParam(name="name", required=false, defaultValue="Peter") String name, Model model) {
        model.addAttribute("name", name);
        return "greeting";
    }
    @GetMapping("/")
    public String main(@RequestParam(name="name", required=false, defaultValue="Peter") String name, Model model) {
        model.addAttribute("name", name);
        return "main";
    }
}
