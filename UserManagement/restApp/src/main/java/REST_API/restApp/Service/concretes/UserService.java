package REST_API.restApp.Service.concretes;

import REST_API.restApp.Dto.User.UserDto;
import REST_API.restApp.Entity.User;
import REST_API.restApp.Exception.ResourceNotFoundException;
import REST_API.restApp.Mappers.UserMapper;
import REST_API.restApp.Repository.IUserRepository;
import REST_API.restApp.Service.IServices;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class UserService implements IServices<UserDto> {
    IUserRepository userRepository;

    @Override
    public List<UserDto> GetAllUsers() {
        return userRepository.findAll().stream().map((user -> UserMapper.UserToUserDto(user))).toList();
    }

    @Override
    public UserDto createUser(UserDto dto) {
        User user = userRepository.save(UserMapper.UserDtoToUser(dto));
        return UserMapper.UserToUserDto(user);
    }

    @Override
    public UserDto getById(Integer id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User with this id doesnt exists: " + id));

        return UserMapper.UserToUserDto(user);
    }

    @Override
    public UserDto UpdateUser(Integer id, UserDto updated) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User with id doesnt exists:" + id));

        user.setId(updated.getId());
        user.setEmail(updated.getEmail());
        user.setUsername(updated.getUserName());
        user.setPassword(updated.getPasswords());

        User userupdated = userRepository.save(user);

        return UserMapper.UserToUserDto(userupdated);
    }

    @Override
    public void deleteUser(Integer id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User with id doesnt exists:" + id));

        userRepository.deleteById(id);
    }
}
