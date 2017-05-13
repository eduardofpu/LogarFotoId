package org.lacos.baby.user;

import org.lacos.baby.utils.BaseBean;

public class AuthenticationBean extends BaseBean{

	private static final long serialVersionUID = 1L;
	private String email;

	private String password;

	public AuthenticationBean() {
	}

	public AuthenticationBean(String email, String password) {
		super();
		this.email = email;
		this.password = password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

}
