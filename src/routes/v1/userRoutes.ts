import { Router } from 'express'
import { usersController } from '../../controllers/usersController'

const userRoutes = Router()

userRoutes.post('/', usersController.createUser)
userRoutes.get('/', usersController.getUsers)
userRoutes.get('/:id', usersController.getUser)
userRoutes.put('/:id', usersController.updateUser)
userRoutes.delete('/:id', usersController.deleteUser)

export { userRoutes }
