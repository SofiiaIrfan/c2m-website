import logoImage from '../../imports/Logo.png';

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <img
      src={logoImage}
      alt="C2M Logo"
      className={className}
      style={{
        objectFit: 'contain'
      }}
    />
  );
}
