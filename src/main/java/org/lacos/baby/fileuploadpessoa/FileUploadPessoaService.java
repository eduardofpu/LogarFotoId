package org.lacos.baby.fileuploadpessoa;



import org.lacos.baby.utils.GenericService;
import org.lacos.baby.utils.ServicePath;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = ServicePath.FILE_UPLOAD_PESSOA_PATH)
public class FileUploadPessoaService extends GenericService<FileUploadPessoa,Long>{


}
