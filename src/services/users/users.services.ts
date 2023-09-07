import { compare } from "bcryptjs"
import { User } from "../../entities"
import { AppError } from "../../errors/AppError"
import { NewUser, loginUser, token, userRuturn, userUpdate } from "../../interfaces"
import { userRepo } from "../../repositories"
import { responseUserSchema, userReadSchema } from "../../schemas"
import { sign } from "jsonwebtoken"

export const createNewUser = async (payload: NewUser ): Promise<userRuturn> =>{
    const newUser: User = userRepo.create(payload)
    await userRepo.save(newUser)

    return responseUserSchema.parse(newUser)
}

export const userLogin = async (payload: loginUser): Promise<token> =>{
    const loginData = await userRepo.findOne({ where: { email: payload.email } })

    if (!loginData) {
        throw new AppError("Invalid credentials", 401)
    }

    const passwordCompare = await compare(payload.password, loginData.password)

    if (!passwordCompare) {
        throw new AppError("Invalid credentials", 401)
    }

    const token = sign(
        {name: loginData.name, admin: loginData.admin},
        process.env.SECRET_KEY!,
        {subject: String(loginData.id), expiresIn: process.env.EXPIRES_IN}
    )

    return { token }
}

export const listUsers = async (): Promise<userRuturn[]> =>{
    return userReadSchema.parse( await userRepo.find())
}

export const updateUser = async (idUser: string, payload: userUpdate): Promise<userUpdate> =>{

    const id: number = Number(idUser)
    
    const userFound: User | null = await userRepo.findOneBy({ id })
    const userUpdate: User = userRepo.create({ ...userFound, ...payload })
    const currentUser = await userRepo.save(userUpdate)

    const newUpdateUser = responseUserSchema.parse(currentUser)
    return newUpdateUser
}

export const deleteSoftUser = async (user: User): Promise<void> =>{
    await userRepo.softRemove(user)
}