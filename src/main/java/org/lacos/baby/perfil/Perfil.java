package org.lacos.baby.perfil;

import javax.persistence.AttributeOverride;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.lacos.baby.user.UserEntity;
import org.lacos.baby.utils.BaseEntity;

@Entity
@Table(name = "tb_perfil")
@AttributeOverride(name = "id", column = @Column(name = "pk_id"))
public class Perfil extends BaseEntity<Long>{

	private static final long serialVersionUID = 1L;


	@Column(name="tb_data", nullable = true, length = 20)
	String dataNascimento;



	@OneToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "user_id")
	private UserEntity user;



	public Perfil() {

	}



	public Perfil(String dataNascimento, UserEntity user) {
		super();

		this.dataNascimento = dataNascimento;
		this.user = user;
	}



	public void setDataNascimento(String dataNascimento) {
		this.dataNascimento = dataNascimento;
	}



	public UserEntity getUser() {
		return user;
	}



	public void setUser(UserEntity user) {
		this.user = user;
	}



}
