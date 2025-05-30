import { useEffect, useState } from "react";
import { getAllRoles } from "../services/roleService";

interface RoleDto {
  id: string;
  name: string;
  permissions: string[];
}

const RolePage = () => {
  const [roles, setRoles] = useState<RoleDto[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    getAllRoles()
      .then(setRoles)
      .catch((err) => {
        console.error(err);
        setError("Roller alınamadı.");
      });
  }, []);

  return (
    <div>
      <h2>Roller</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {roles.map((role) => (
          <li key={role.id}>
            <strong>{role.name}</strong>
            {role.permissions?.length > 0 && (
              <ul>
                {role.permissions.map((perm, index) => (
                  <li key={index}>{perm}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RolePage;
