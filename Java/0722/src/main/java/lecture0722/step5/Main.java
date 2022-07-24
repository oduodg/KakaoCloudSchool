package lecture0722.step5;

import java.sql.SQLException;

public class Main {

    public static void main(String[] args) throws SQLException, ClassNotFoundException {

        ConnectionMaker connectionMaker = new NUserDAO(); // ConnectionMaker 생성

        UserDAO dao = new UserDAO(connectionMaker); // DAO에 주입

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
