package lecture0722.step5;

import java.sql.Connection;
import java.sql.SQLException;

public interface ConnectionMaker { // interface로 만든다.
    public Connection makeConnection() throws ClassNotFoundException, SQLException;
}
