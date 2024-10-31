export const getInitials = (email) => {
    if (!email) return "";
    const parts = email.split("@")[0].split(".");
    return parts.length === 1
      ? parts[0][0].toUpperCase()
      : parts.map(part => part[0].toUpperCase()).join("");
  };
  