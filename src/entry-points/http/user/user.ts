import { FastifyPluginAsyncTypebox, TypeBoxTypeProvider } from "@fastify/type-provider-typebox";
import { addUser, getUser } from "../../../data-access/user.repo";
import { UserSchema, User } from "../../../domain/user.schema";

const userRoute: FastifyPluginAsyncTypebox = async (fastify) => {
    const typedFastify = fastify.withTypeProvider<TypeBoxTypeProvider>();

    typedFastify.get("/", {
        schema: {
            response: {
                200: {
                    type: "array",
                    items: UserSchema,
                },
            },
        },
    }, async () => {
        const users = await getUser();
        return users;
    });

    typedFastify.post<{ Body: User }>("/", {
        schema: {
            body: UserSchema,
            response: {
                200: {
                    type: "object",
                    properties: {
                        message: { type: "string" },
                        data: UserSchema,
                    },
                },
            },
        },
    }, async (request, reply) => {
        const createdUser = await addUser(request.body);
        reply.send({ message: "User created", data: createdUser });
    });
};

export default userRoute;
