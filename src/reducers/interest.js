/***
 * Separating interest into its own slice of state due to the fact that
 * it's the only piece of state that relies on ansynchronous data. If
 * it was kept within the form state, it'd muddy things up with a lot of
 * promise logic.
 */
export default (state = initialValue, action) => {
  switch (action.type) {
    default:
      return state;
  }
}