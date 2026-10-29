export default function GoogleMap() {
  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 shadow-xl">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2284.114676446353!2d72.91982962536575!3d22.533081509792602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e4de9c9c259e5%3A0x2248bbfabaf16b98!2sCOSMOS%20INDUSTRIES!5e1!3m2!1sen!2sin!4v1785906791011!5m2!1sen!2sin"
        width="100%"
        height="420"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  );
}