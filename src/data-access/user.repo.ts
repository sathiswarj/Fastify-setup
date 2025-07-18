import { userModel } from "./model/user.model";
import { User } from "../domain/user.schema";
// Get all users
const getUser = async () => {
    try {
        const users = await userModel.find({});
        return users;
    } catch (error) {
        throw error;
    }
};

// Add a new user
const addUser = async (userData: User) => {
    try {
        const { userName, mobileNo, email } = userData;

        const userToCreate = { userName, mobileNo, email };
        const createdUser = await userModel.create(userToCreate);
        return createdUser;
    } catch (error) {
        throw error;
    }
};

export { getUser, addUser };
