# Tasa de retención de clientes
# Formula: tasa de retencion = ((numero de clientes al final del periodo - nuevos clientes durante el periodo) / numero de clientes al inicio del periodo) * 100

clientesFinales = input("Ingrese el número de clientes al final del periodo: ")
nuevosClientes = input("Ingrese el número de nuevos clientes durante el periodo: ")
clientesIniciales = input("Ingrese el número de clientes al inicio del periodo: ")

def tasa_retencion(clientesFinales, nuevosClientes, clientesIniciales):
    tasa_de_retencion = ((clientesFinales - nuevosClientes) / clientesIniciales) * 100
    
    print(f'La tasa de retención es de: {round(tasa_de_retencion, 3)}%')

tasa_retencion(int(clientesFinales), int(nuevosClientes), int(clientesIniciales))