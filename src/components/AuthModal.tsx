import React, { useState } from 'react';
import type { AuthMode } from '../types';

interface AuthModalProps {
  mode: AuthMode;
  onClose: () => void;
  onSwitchMode: (mode: AuthMode) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ mode, onClose, onSwitchMode }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!mode) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="modal-close"
          onClick={onClose}
          aria-label="Fechar"
        >
          &times;
        </button>

        <h3 className="title">
          {mode === 'register' ? 'Criar Conta' : 'Acessar Conta'}
        </h3>

        {submitted ? (
          <div className="auth-success" style={{ marginTop: '1.5rem' }}>
            {mode === 'register'
              ? 'Cadastro realizado com sucesso! Bem-vindo.'
              : 'Login efetuado com sucesso! Redirecionando...'}
          </div>
        ) : (
          <form className="auth-form" onSubmit={handleSubmit}>
            {mode === 'register' && (
              <div className="form-group">
                <label htmlFor="auth-name">Nome Completo</label>
                <input
                  id="auth-name"
                  type="text"
                  placeholder="Seu nome"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            )}

            <div className="form-group">
              <label htmlFor="auth-email">E-mail</label>
              <input
                id="auth-email"
                type="email"
                placeholder="seu.email@exemplo.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="auth-pass">Senha</label>
              <input
                id="auth-pass"
                type="password"
                placeholder="••••••••"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="auth-submit-btn">
              {mode === 'register' ? 'Cadastrar' : 'Entrar'}
            </button>

            <div className="auth-switch">
              {mode === 'register' ? (
                <>
                  Já possui uma conta?{' '}
                  <button type="button" onClick={() => onSwitchMode('login')}>
                    Entrar
                  </button>
                </>
              ) : (
                <>
                  Não possui uma conta?{' '}
                  <button type="button" onClick={() => onSwitchMode('register')}>
                    Cadastre-se
                  </button>
                </>
              )}
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
