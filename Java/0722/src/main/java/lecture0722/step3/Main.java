package lecture0722.step3;

import java.sql.SQLException;

public class Main {

    public static void main(String[] args) throws SQLException, ClassNotFoundException {
        // 클래스의 확장
        UserDAO dao = new UserDAO();

        // VO 객체 생성
        User user = new User();
        user.setId("1");
        user.setName("홍길동");
        user.setPassword("test1234");
        dao.insert(user);

        System.out.println("새로운 사용자 등록");

        User user2 = dao.select("1");
        System.out.println(user2.getName() + ", " + user2.getPassword());
    }
}
