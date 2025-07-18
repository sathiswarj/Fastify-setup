import { FastifyPluginAsyncTypebox, TypeBoxTypeProvider } from "@fastify/type-provider-typebox";
import { addUser, getUser } from "../../../data-access/user.repo";
import { UserSchema, User } from "../../../domain/user.schema";
// FastifyPluginAsyncTypebox is an async Fastify plugin type that combines route handling with TypeBox-based validation and full TypeScript type safety.

//request.body, request.query, request.params, and reply.send() all have the correct TypeScript types based on your TypeBox schemas.
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
        // req.body is automatically typed as User
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
