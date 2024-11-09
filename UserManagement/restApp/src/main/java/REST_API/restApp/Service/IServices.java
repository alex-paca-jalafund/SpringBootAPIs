package REST_API.restApp.Service;

import java.util.List;

public interface IServices <T> {
    List<T> GetAllUsers();
    T createUser(T dto);
    T getById(Integer id);
    T UpdateUser (Integer id, T updated);
    void deleteUser(Integer id);
}
