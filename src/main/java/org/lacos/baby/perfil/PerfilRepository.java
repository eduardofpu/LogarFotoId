package org.lacos.baby.perfil;

import java.util.List;

import org.lacos.baby.user.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PerfilRepository extends JpaRepository<Perfil,Long>{

	public List<Perfil> findByUser(UserEntity user);

}
