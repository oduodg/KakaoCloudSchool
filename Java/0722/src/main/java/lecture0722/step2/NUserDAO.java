package lecture0722.step2;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

// naver쪽 개발자가 UserDAO를 이용하기 위해
// subclass를 작성
public class NUserDAO extends UserDAO {

    @Override
    protected Connection getConnection() throws ClassNotFoundException, SQLException {
        // naver 나름대로의 connection 연결방법에 대한 구현이 나오면 된다!
        Class.forName("com.mysql.cj.jdbc.Driver");
        String jdbc_URL = "jdbc:mysql://localhost:3306/sqldb?characterEncoding=UTF-8&serverTimezone=UTC&userSSL";
        Connection con = DriverManager.getConnection(jdbc_URL, "root", "20170520");
        return con;
    }
}
