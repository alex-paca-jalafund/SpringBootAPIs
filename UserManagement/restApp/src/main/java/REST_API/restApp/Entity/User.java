package REST_API.restApp.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;

    @Column(name = "user-name")
    String username;

    @Column (name = "user-password")
    String password;

    @Column (name = "user-email")
    String email;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "fk_id")
    BankAccount bankAccount_id;
}
