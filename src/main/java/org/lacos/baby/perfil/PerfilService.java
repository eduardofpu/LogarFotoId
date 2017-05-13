package org.lacos.baby.perfil;




import java.util.List;

import org.lacos.baby.fileuploadpessoa.FileUploadPessoaRepository;
import org.lacos.baby.security.CurrentUser;
import org.lacos.baby.user.UserEntity;
import org.lacos.baby.user.UserRepository;
import org.lacos.baby.utils.GenericService;
import org.lacos.baby.utils.ServicePath;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
@RequestMapping(path = ServicePath.PERFIL_PATH)
public class PerfilService extends GenericService<Perfil,Long>{

	@Autowired
	private CurrentUser currentUser;

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private PerfilRepository perfilRepository;

	@Autowired
	private PasswordEncoder passwordEncoder;

	@Autowired
	public FileUploadPessoaRepository fileUploadPessoaRepository;


	@Override
	public List<Perfil> findAll() {
		UserEntity user = this.userRepository.findByEmail(currentUser.getActiveUser().getEmail());

		System.out.println("user:"+user.toString());
		List<Perfil> ps =this.perfilRepository.findByUser(user);
		for (Perfil p : ps) {
			System.out.println("Perfil:"+ p.toString());
		}

		return this.perfilRepository.findByUser(user);
	}

	@Override
	public Perfil insert(@RequestBody Perfil p) {
		p.getUser().setPassword(this.passwordEncoder.encode(p.getUser().getPassword()));
		UserEntity usuario  = this.userRepository.findByEmail(currentUser.getActiveUser().getEmail());//update no usuario logado
		//UserEntity usuario = new UserEntity();
		usuario.setEmail(p.getUser().getEmail());
		usuario.setFileUploadPessoa(p.getUser().getFileUploadPessoa());
		usuario.setName(p.getUser().getName());
		usuario.setPassword(p.getUser().getPassword());
		usuario = this.userRepository.saveAndFlush(usuario);

		p.setUser(usuario);


		return super.insert(p);
	}



}
