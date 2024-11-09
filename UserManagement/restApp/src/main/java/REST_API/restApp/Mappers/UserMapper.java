package REST_API.restApp.Mappers;

import REST_API.restApp.Dto.User.UserDto;
import REST_API.restApp.Entity.User;

public class UserMapper {

    public static User UserDtoToUser(UserDto userDto){
        return new User(
                userDto.getId(),
                userDto.getUserName(),
                userDto.getPasswords(),
                userDto.getEmail(),
                userDto.getBankAccount()
        );
    }

    public static UserDto UserToUserDto(User user){
        return new UserDto(
                user.getId(),
                user.getUsername(),
                user.getPassword(),
                user.getEmail(),
                user.getBankAccount_id()
        );
    }
}
