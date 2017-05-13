package org.lacos.baby.fileuploadpessoa;

import org.springframework.data.jpa.repository.JpaRepository;

public interface FileUploadPessoaRepository extends JpaRepository<FileUploadPessoa,Long>{

	//public List<FileUploadPessoa> findByUserFileUploadPessoa(UserEntity user);

}
