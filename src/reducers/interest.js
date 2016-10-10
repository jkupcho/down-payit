/***
 * Separating interest into its own slice of state due to the fact that
 * it's the only piece of state that relies on asynchronous data. If
 * it was kept within the form state, it'd muddy things up with a lot of
 * promise logic.
 */
const initialValue = 4.2;

export default (state = initialValue, action) => {
  switch (action.type) {
    case 'FORM_UPDATED':
      if (action.payload.interest) {
        return action.payload.interest;
      }
      return state;
    default:
      return state;
  }
}