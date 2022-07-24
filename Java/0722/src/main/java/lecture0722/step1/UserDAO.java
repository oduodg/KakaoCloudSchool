package lecture0722.step1;

import java.sql.*;

public class UserDAO {

    // 새로운 사용자를 테이블에 추가
    // VO를 인자로 받는다. -> user라는 테이블 객체
    public void insert(User user) throws ClassNotFoundException, SQLException {
        // try ~ catch를 사용하지 않아요 !
        Class.forName("com.mysql.cj.jdbc.Driver");
        String jdbc_URL = "jdbc:mysql://localhost:3306/sqldb?characterEncoding=UTF-8&serverTimezone=UTC&userSSL";
        Connection con = DriverManager.getConnection(jdbc_URL, "root", "20170520");

        String sql = "INSERT INTO users VALUES (?, ?, ?)";
        PreparedStatement pstmt = con.prepareStatement(sql);

        pstmt.setString(1, user.getId());
        pstmt.setString(2, user.getName());
        pstmt.setString(3, user.getPassword());

        pstmt.executeUpdate();
        pstmt.close();
        con.close();
    }

    // id를 받아서 해당 id의 정보를 리턴한다.
    public User select(String id) throws ClassNotFoundException, SQLException {
        // try ~ catch를 사용하지 않아요 !
        Class.forName("com.mysql.cj.jdbc.Driver");
        String jdbc_URL = "jdbc:mysql://localhost:3306/sqldb?characterEncoding=UTF-8&serverTimezone=UTC&userSSL";
        Connection con = DriverManager.getConnection(jdbc_URL, "root", "20170520");

        String sql = "SELECT * FROM users WHERE id = ?";
        PreparedStatement pstmt = con.prepareStatement(sql);
        pstmt.setString(1, id);

        // 결과 레코드 집합
        ResultSet rs = pstmt.executeQuery();
        rs.next();

        // VO 객체를 만들고 값을 넣어줌
        User user = new User();
        user.setId(rs.getString("id"));
        user.setName(rs.getString("name"));
        user.setPassword(rs.getString("password"));

        // 사용한 자원 해제
        rs.close();
        pstmt.close();
        con.close();

        return user; // user를 리턴
    }
}
