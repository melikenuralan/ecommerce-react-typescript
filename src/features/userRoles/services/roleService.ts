const API_BASE = "https://localhost:7277/api/Role";

export async function getAllRoles() {
  const response = await fetch(`${API_BASE}`);
  if (!response.ok) throw new Error("Roller alınamadı");
  return await response.json(); // RoleDto listesi döner
}
