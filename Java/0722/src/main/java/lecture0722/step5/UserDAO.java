package lecture0722.step5;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class UserDAO {

    private ConnectionMaker connectionMaker;

    public UserDAO(ConnectionMaker connectionMaker) {
        this.connectionMaker = connectionMaker; // 객체를 주입받는다.(DI)
    }
    public void insert(User user) throws ClassNotFoundException, SQLException {

        Connection con = connectionMaker.makeConnection();
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

        Connection con = connectionMaker.makeConnection();

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
