export const registerEmail = async (email: string) => {
  const url = new URL("register", import.meta.env.VITE_BACKEND_URL);
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });
    if (response.ok) {
      return response.json();
    }
    throw new Error("Error registering email");
  } catch (error) {
    console.error("Error registering email", error);
  }
};
