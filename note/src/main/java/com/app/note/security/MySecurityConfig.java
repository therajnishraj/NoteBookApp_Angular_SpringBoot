package com.app.note.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
/**
 * Developed By Rajnish Raj
 */
@Configuration
@EnableWebSecurity
public class MySecurityConfig extends WebSecurityConfigurerAdapter {
    @Autowired
    private LoginUserDetailsService loginUserDetailsService;
    @Autowired
    JwtFilter jwtFileter;

    @Autowired
    private JwtAuthenticationEntryPoint jwtAuthenticationEntryPoint;
    @Bean
    public UserDetailsService userDetailsService(){
        return new LoginUserDetailsService();
    }
    @Bean
    public PasswordEncoder passwordEncoder(){
        return NoOpPasswordEncoder.getInstance();
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(loginUserDetailsService);
    }

    @Override
    protected void configure(HttpSecurity httpSecurity) throws Exception {
//        super.configure(http);
        httpSecurity.cors().and().csrf().disable();
        httpSecurity
                // dont authenticate this particular request
                .authorizeRequests()
                .antMatchers("/api/user/forgotPassword","/api/user/createUser","/api/user/login","/login/**","/login","/signUp", "/summary/getSummaryData",
                        "/actuator/**","/favicon.ico",
                        "/", "/assets/**", "/public/**", "/index.html", "/*.js", "/*.css", "/.*woff", "/.*woff2",
                        "/auth/forgetPassword", "/auth/resetPassword","/getByteArrayget/**","/getByteArrayForVideo/**","/forgotPassword/**").permitAll()
                .antMatchers(HttpMethod.OPTIONS, "/**")
                .permitAll().
                // all other requests need to be authenticated
                        anyRequest().authenticated().and().
                // make sure we use stateless session; session won't be used to
                // store user's state.
                        exceptionHandling().authenticationEntryPoint(jwtAuthenticationEntryPoint).and().sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS);

        // Add a filter to validate the tokens with every request
        httpSecurity.addFilterBefore(jwtFileter, UsernamePasswordAuthenticationFilter.class);
    }
    @Bean
    public AuthenticationManager authenticationManagerBean() throws Exception{
      return  super.authenticationManagerBean();
    }
}
