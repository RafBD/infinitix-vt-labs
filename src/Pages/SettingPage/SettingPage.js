import { React, useRef, useState } from 'react';
import { MultiStateCheckbox } from 'primereact/multistatecheckbox';
import { useAuth0 } from '@auth0/auth0-react';
import 'primeicons/primeicons.css';
import { Password } from 'primereact/password';
import './SettingPage.css';

export default function SettingPage() {
    const { user } = useAuth0();

    const [value, setValue] = useState('Visible para cualquier persona');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const options = [
        { value: 'Visible para cualquier persona', icon: 'pi pi-globe' },
        { value: 'Tu organización y las personas con las que interactúas', icon: 'pi pi-building' },
    ];

    const handlePasswordChange = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            // Implementa la lógica para cambiar la contraseña
            console.log('Contraseña cambiada con éxito');
        } else {
            console.log('Las contraseñas no coinciden');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="flex items-center gap-6">
                <div className="max-w-sm bg-transparent border border-gray-200 rounded-lg shadow">
                    <div className="p-5">
                        <h1 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white text-center">
                            Imagen de Perfil
                        </h1>
                        <div className="flex justify-center mt-3 mb-3">
                            <img src={user.picture} alt={user.name} className="w-24 h-24 rounded-full object-cover" />
                        </div>
                        <p className="text-white dark:text-gray-400 text-center mb-4">
                            Si añades una foto, otras personas podrán reconocerte y sabrás si has iniciado sesión en tu cuenta
                        </p>
                        <div className="flex items-center gap-2 border border-white text-white w-full h-auto p-2 rounded-lg">
                            <MultiStateCheckbox
                                value={value}
                                onChange={(e) => setValue(e.value)}
                                options={options}
                                optionValue="value"
                            />
                            <span>{value || 'Opción por Default'}</span>
                        </div>
                        <div className="flex items-center justify-center mt-4">
                            <button className="btn w-auto p-2 text-white rounded-md">
                                Abrir Cámara
                            </button>
                        </div>
                    </div>
                </div>

                <div className="max-w-sm bg-transparent border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-5">
                        <h2 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white text-center">
                            Cambiar Contraseña
                        </h2>
                        <form onSubmit={handlePasswordChange} className="space-y-4">
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-white dark:text-gray-300">
                                    Nueva Contraseña
                                </label>
                                <Password className="input-password focus:outline-none focus:ring-purple-500 focus:border-purple-900 sm:text-sm" value={password} onChange={(e) => setPassword(e.target.value)} toggleMask />

                            </div>
                            <div>
                                <label htmlFor="confirm-password" className="block text-sm font-medium text-white dark:text-gray-300">
                                    Confirmar Nueva Contraseña
                                </label>
                                <Password className="input-password focus:outline-none focus:ring-purple-500 focus:border-purple-900 sm:text-sm" value={password} onChange={(e) => setPassword(e.target.value)} toggleMask />
                            </div>
                            <div className="flex justify-center items-center">
                                <button type="submit" className="flex justify-center items-center btn text-white rounded-md w-auto p-2">
                                    Cambiar Contraseña
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
