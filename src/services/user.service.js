const { supabase } = require("lib/supabase");

const UserLogin = async ({ email, password }) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });
  if (error) {
    return [null, error];
  }

  return [data, null];
};

const UserRegister = async ({ email, password }) => {
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
  });
  if (error) {
    return [null, error];
  }

  return [data, null];
};

const ForgotPassword = async () => {
  // TODO: // Implement Forgot Password
};

export { UserLogin, UserRegister, ForgotPassword };
