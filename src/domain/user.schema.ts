import { Static, Type } from "@sinclair/typebox";

export const UserSchema = Type.Object({
    userName: Type.Optional(Type.String()),
    mobileNo: Type.Optional(Type.String()),
    email: Type.Optional(Type.String()),
});

export type User = Static<typeof UserSchema>;
