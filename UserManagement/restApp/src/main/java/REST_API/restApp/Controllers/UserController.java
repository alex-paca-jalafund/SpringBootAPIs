package REST_API.restApp.Controllers;

import REST_API.restApp.Dto.User.UserDto;
import REST_API.restApp.Service.concretes.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("api/users")

public class UserController {
    private UserService userService;

    @PostMapping
    public ResponseEntity<UserDto> createUser(@RequestBody UserDto userDto){
        UserDto saved = userService.createUser(userDto);
        return new ResponseEntity<>(saved, HttpStatus.CREATED);
    }

    @GetMapping
    public List<UserDto> getAllUsers(){
        return userService.GetAllUsers();
    }

    @GetMapping ("{id}")
    public UserDto getUserById(@PathVariable Integer id){
        return userService.getById(id);
    }

    @PutMapping("{id}")
    public ResponseEntity<UserDto> updateUser(@PathVariable Integer id, @RequestBody UserDto userDto){
        UserDto updated = userService.UpdateUser(id,userDto);
        return new ResponseEntity<>(updated,  HttpStatus.ACCEPTED);
    }

    @DeleteMapping("{id}")
    public void deleteUser(@PathVariable Integer id){
        userService.deleteUser(id);
    }

}
