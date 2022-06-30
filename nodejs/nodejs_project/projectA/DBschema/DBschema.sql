
-- primary key: not null과 유일해야 한다.
            -- 테이블 당 하나씩만 부여가 가능하다.
            -- 단, 여러 개의 필드를 묶어서 하나의 primary key를 만들기도 한다.
            -- primary key는 없어도 돌아가긴 한다. 그러나 꼭 지정해주자.
            -- 데이터베이스는 순차검색, 색인순차(Index)
            -- primary key를 지정한 필드는 무조건색인을 만들어준다.
            -- 순차검색 병렬처리, 색인순차는 직렬처리

-- foreign key: 두개의 테이블이 1:n 관계에서 
            -- 1이 primary key 또는 unique 제약조건일 때
            -- n쪽에서 앞의 테이블을 외부키로 만들 수 있다.
            -- 서로 제약이 되어서 1인 테이블쪽은 데이터를 함수로 삭제하거나 테이블을 삭제할 수 없고,
            -- n쪽에서는 1인 테이블에 없는 데이터를 추가할 수 없다.

-- char(40): A 공백 39개로 채워서 저장, 성별, 주민번호, 사원번호, 학번, 코드, 우편번호

-- unique: null은 허용, 중복 안됨


create table member(
    memberid bigint not null primary key auto_increment,
    userid varchar(40) unique,
    password varchar(200), -- 암호화 알고리즘을 작동시켜서 저장해야 한다.
    username varchar(40),
    email varchar(40),
    phone varchar(40),
    wdate datetime, -- 등록일
    delyn char(1) default 'N' -- 기본값은 N으로 하고 탈퇴/강퇴시 Y로
);

insert into member(userid, password, username, email, phone, wdate) values('test', '1234', '홍길동', 'hong@hanmail.net', '010-0000-0000', now());

create table board(
    id bigint not null primary key auto_increment,
    title varchar(800),
    writer varchar(40),
    contents longtext,
    wdate datetime,
    hit int
);

db.createCollection("customSequence");
db.customSequence.insert({_id:"hero", seq:0});
db.customSequence.insert({_id:"member", seq:0});
db.customSequence.insert({_id:"board", seq:0});

db.customSequence.find();

db.customSequence.findAndModify(
    {
        query: {_id: "hero"},
        update: {$inc:{seq:1}},
        new: true
    }
);