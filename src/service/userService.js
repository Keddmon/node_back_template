import db from '../DB';

export class UserService {

    // 회원 전체 조회
    async getUsers() {
        try {
            const getQuery = 'SELECT * FROM User';
            const [data] = db.query(getQuery);

            return data;
        } catch (e) {
            console.log(`[UserService][getUsers] Error: ${e.message}`);
        }
    };

    // 회원 단일 조회
    async getOneUser(user_id) {
        try {
            const getOneQuery = 'SELECT * FROM User WHERE user_id = ?';
            const [[data]] = db.query(getOneQuery, user_id);

            return data;
        } catch (e) {
            console.log(`[UserService][getOneUser] Error: ${e.message}`);
        }
    };
};