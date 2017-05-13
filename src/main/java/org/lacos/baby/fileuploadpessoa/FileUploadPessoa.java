package org.lacos.baby.fileuploadpessoa;

import javax.persistence.AttributeOverride;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Type;
import org.lacos.baby.utils.BaseEntity;



@Entity
@Table(name = "tb_file_upload_pessoa")
@AttributeOverride(name = "id", column = @Column(name = "id_file_upload_pessoa") )
public class FileUploadPessoa extends BaseEntity<Long> {

	private static final long serialVersionUID = 1L;

	//@Lob

	@Column(name = "tb_file",nullable=false)
	@Type(type="org.hibernate.type.BinaryType")// para ler a foto no postgres do heroku
	private byte[] file;

	@Column(name = "mime_type", nullable = true)
	private String mimeType;

	public FileUploadPessoa() {

	}


	public FileUploadPessoa(byte[] file, String mimeType) {
		super();
		this.file = file;
		this.mimeType = mimeType;
	}



	public byte[] getFile() {
		return file;
	}

	public void setFile(byte[] file) {
		this.file = file;
	}

	public String getMimeType() {
		return mimeType;
	}

	public void setMimeType(String mimeType) {
		this.mimeType = mimeType;
	}






}
