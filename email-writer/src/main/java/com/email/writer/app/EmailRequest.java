package com.email.writer.app;


import lombok.Data;

@Data
public class EmailRequest {

    //Email content crafted from prompt
    private String emailContent;

    //Tone be any as like professional, funny or casual
    private String tone;
}
