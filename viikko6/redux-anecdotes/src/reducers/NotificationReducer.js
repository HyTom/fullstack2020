const notificationReducer = (state = null, action) => {
        switch (action.type) {
          case 'VOTE':
            return `You voted for: ${action.anecdote}`
          case 'NULL':
            return null
          default:
            return state
        }
      }

      export const newVote = anecdote => {
          return{
              type: 'VOTE',
              anecdote
          }
      }

      export const nullVote = () => {
        return{
            type: 'NULL'
        }
    }

    export default notificationReducer