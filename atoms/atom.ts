import { atom, useRecoilState } from "recoil";
import { getJsonData } from "../helpers/asyncStorage";

export const userState = atom({
    key: "user",
    default: undefined
})

export const getUser = async() => {
    const user = await getJsonData("user");
    if(user!=null) {
        return user;
    }
    return undefined;
}