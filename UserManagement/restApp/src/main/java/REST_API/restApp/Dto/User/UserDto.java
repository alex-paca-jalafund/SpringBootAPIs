package REST_API.restApp.Dto.User;

import REST_API.restApp.Entity.BankAccount;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserDto {
    private int id;
    private String userName;
    private String passwords;
    private String email;
    private BankAccount bankAccount;
}
