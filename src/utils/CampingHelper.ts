export const ServiceStatus = (status: string): string => {
  if (status === 'open') {
    return 'Aberto';
  }
  if (status === 'closed') {
    return 'Fechado';
  }

  return 'Não disponivel';
};
