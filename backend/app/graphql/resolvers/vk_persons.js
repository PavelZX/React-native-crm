import moment from "moment"
import { Op } from "sequelize"
import { merge, path, prop, last } from "ramda"
import { User, VkPerson } from "app/models"
import { authenticated } from "app/services/graphql"

export const vkPersons = authenticated(async (root, args, ctx) => {
  const { user } = ctx
  const { cursor, limit = 15 } = args.input
  let query = { user_id: user.id }

  const addFriendAt = path(["input", "filter", "addFriendAt"], args)
  if (addFriendAt) {
    query = merge({
      where: {
        addFriendAt: {
          [Op.gt]: moment(addFriendAt).add(-1, 'days').toDate(),
          [Op.lt]: moment(addFriendAt).add(1, 'days').toDate(),
        }
      }
    }, query)
  }

  if (cursor) {
    query = merge({
      where: {
        id: {
          [Op.gt]: parseInt(cursor)
        }
      }
    }, query)
  }

  query.limit = limit || 15

  const vkPersons = await VkPerson.findAll(query)
  const count = await VkPerson.count({ user_id: user.id })
  const newCursor = prop("id", last(vkPersons))

  return {
    vkPersons,
    count,
    cursor: newCursor,
  }
})
