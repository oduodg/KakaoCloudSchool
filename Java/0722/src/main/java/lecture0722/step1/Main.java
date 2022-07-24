package lecture0722.step1;

import java.sql.SQLException;

public class Main {

    public static void main(String[] args) throws SQLException, ClassNotFoundException {
        // Service없이 main에서 직접 로직처리를 해 보아요!
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
